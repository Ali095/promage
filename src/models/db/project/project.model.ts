import { model, Schema } from "mongoose";
import { DTOCreate } from "../../datamodels/dto";
import { ProjectDTO, ProjectStatus } from "../../datamodels/project";

const schemaFields: Record<keyof DTOCreate<ProjectDTO>, any> = {
    name: { type: String, required: true },
    details: { type: String, required: false },
    status: { type: String, required: false, default: ProjectStatus.PENDING },
    startDate: { type: Date, required: false, default: null },
    endDate: { type: Date, required: false, default: null },
    manager: { type: Schema.Types.ObjectId, ref: "user", required: false, default: null }
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
export const ProjectModel = model("project", schema);

