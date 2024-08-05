import mongoose from 'mongoose';
const {Schema} = mongoose;

const DataroomSchema = new Schema(
    {
        documentName:{
            type: String,
            unique: true,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        __v: {
            type: Number,
            select: false,
        },
    },
    {timestamps: true}
);

const Dataroom = mongoose.model('dataroom', DataroomSchema);

export default Dataroom;
