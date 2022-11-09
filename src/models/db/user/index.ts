import { model, Schema } from "mongoose";
import { DTOCreate } from "../../datamodels/dto";
import { UserDTO, UserRoles } from "../../datamodels/user";

const schemaFields: Record<keyof DTOCreate<UserDTO>, any> = {
    name: { type: String, required: true },
    role: { type: UserRoles, required: false, default: UserRoles.MANAGER }
};

const schema = new Schema(schemaFields, { timestamps: true, versionKey: false });
// Duplicate the ID field.
schema.virtual("id").get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
schema.set("toJSON", {
    virtuals: true
});
export const UserModel = model("user", schema);

