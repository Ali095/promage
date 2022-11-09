import { model, Schema } from "mongoose";
import { DTOCreate } from "../../datamodels/dto";
import { TaskDTO, TaskStatus } from "../../datamodels/project/task.dto";


const schemaFields: Record<keyof DTOCreate<TaskDTO>, any> = {
    name: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: false, default: TaskStatus.BACKLOG },
    startDate: { type: Date, required: false, default: null },
    endDate: { type: Date, required: false, default: null },
    asignee: { type: Schema.Types.ObjectId, ref: "user", required: false },
    project: { type: Schema.Types.ObjectId, ref: "project", required: true }
};

const schema = new Schema(schemaFields, { timestamps: true, versionKey: false });
// Duplicate the ID field.
schema.virtual("id").get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised and delete the _id feild while fetching.
schema.set("toJSON", {
    virtuals: true,
    transform: function(doc, ret) {
        delete ret._id;
    }
});
export const TaskModel = model("task", schema);

