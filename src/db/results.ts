import mongoose from 'mongoose';

// Result Config
const ResultSchema = new mongoose.Schema({
    playerX: { type: String, required: true },
    playerO: { type: String, required: true },
    scores: { type: [Object], required: true },
});

export const ResultModel = mongoose.model('Result', ResultSchema);

// Result Actions
export const getAllResults = () => ResultModel.find();

export const getResultById = (id: string) => ResultModel.findById(id);
export const addResult = (values: Record<string, any>) => new ResultModel(values).save().then((user) => user.toObject());
export const deleteResultById = (id: string) => ResultModel.findOneAndDelete({ _id: id });
export const updateResultById = (id: string, values: Record<string, any>) => ResultModel.findByIdAndUpdate(id, values);