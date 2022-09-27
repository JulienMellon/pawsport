const cloudinary = require("../middleware/cloudinary");
const Pet = require("../models/Pet");
const Vaccine = require("../models/Vaccine");

module.exports = {
	createVaccine: async (req, res) => {
		try {
			const result = await cloudinary.uploader.upload(req.file.path);
			await Vaccine.create({
				vaccine: req.body.vaccine,
				user: req.user.id,
				petid: req.body.petid,
				dateAdministered: req.body.dateAdministered,
				image: result.secure_url,				
				cloudinaryId: result.public_id				
			});
			console.log("Vaccine has been added!");
			res.redirect("/pet/" + req.body.petid);
		} catch (err) {
			console.log(err);
		}
	},
	likeVaccine: async (req, res) => {
		try {
			await Vaccine.findOneAndUpdate(
				{ _id: req.params.idVaccine },
				{
					dateAdministered: Date.now(),
				}
			);
			console.log("Likes +1");
			console.log(`pet ${req.body.petid}`)
			res.redirect(`/pet/${req.body.petid}`);
		} catch (err) {
			console.log(err);
		}
	},
	softDeleteVaccine: async (req, res)=>{
		try {
			await Vaccine.findOneAndUpdate(
				{ _id: req.params.idVaccine },
				{
					deleted: true
				}
			);
			console.log("Vaccine Deleted. Well... at least as far as a user is concerned");
			console.log(`pet ${req.body.petid}`)
			res.redirect(`/pet/${req.body.petid}`);
		} catch (err) {
			console.log(err);
		}
	},
	deleteVaccine: async (req, res) => {
		try {
			// Find vaccine by id
			let vaccine = await Vaccine.findById({ _id: req.params.id });
			// Delete image from cloudinary
			await cloudinary.uploader.destroy(vaccine.cloudinaryId);
			// Delete vaccine from db
			await Vaccine.remove({ _id: req.params.id });
			console.log("Deleted Vaccine");
			res.redirect(`/pet/${req.body.petid}`);
		} catch (err) {
			res.redirect("/profile");
		}
	},
		
};
