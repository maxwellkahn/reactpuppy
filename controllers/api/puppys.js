const Puppy = require('../../models/puppy');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne,
};

async function index(req, res) {
    const puppys = await Puppy.find({}).sort('name').populate('category')
    res.status(200).json(puppys);
}

async function show(req, res) {
    const puppy = await Puppy.findById(req.params.id);
    res.json(puppy);
}

async function create(req, res) {
    const puppy = await Puppy.create(req.body);
    res.status(201).json(puppy);
}

async function update(req, res) {
    const puppy = await Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).json(puppy);
}

async function deleteOne(req, res) {
    const deletedPuppy = await Puppy.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPuppy);
}