import { pool } from "../../db.js";

import * as Yup from "yup";

const addEntrySchema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  phoneNumber: Yup.string(),
  phoneNumber2: Yup.string(),
  email: Yup.string().email().required(),
});

const addEntry = async (req, res) => {
  try {
    // Validate request body
    // await addEntrySchema.validate(req.body);
    const {
      customerId,
      firstname,
      lastname,
      businessname,
      email,
      phoneNumber,
      phoneNumber2,
      createdAt,
      address,
      address2,
      city,
      state,
      zip,
      customUUID,
    } = req.body;
    let fullname = `${firstname} ${lastname}`;
    const newEntry = await pool.query(
      "INSERT INTO tickets (customer_id, customer_fullname, customer_firstname, customer_lastname, business_name, customer_email, customer_phone, phone_number_2, created_at,customer_address,customer_address_2,customer_city,customer_state,customer_zip, custom_uuid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) returning unique_id",
      [
        customerId,
        fullname,
        firstname,
        lastname,
        businessname,
        email,
        phoneNumber,
        phoneNumber2,
        createdAt,
        address,
        address2,
        city,
        state,
        zip,
        customUUID,
      ]
    );
    res.status(200).json(newEntry.rows);
  } catch (error) {
    console.log("Create entry error", error);
  }
};
export default addEntry;
