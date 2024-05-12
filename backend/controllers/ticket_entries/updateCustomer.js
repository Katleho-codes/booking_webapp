import { pool } from "../../db.js";

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const {
    editCustomerFirstname,
    editCustomerLastname,
    editCustomerEmail,
    editCustomerPhone,
    editCustomerPhone2,
    editCustomerAddress,
    editCustomerAddress2,
    editCustomerState,
  } = req.body;
  let fullname = editCustomerFirstname + " " + editCustomerLastname;
  try {
    const editQuery = await pool.query(
      "UPDATE tickets SET customer_fullname = $1, customer_firstname = $2, customer_lastname = $3, customer_email = $4, customer_phone = $5, phone_number_2 = $6, customer_address = $7, customer_address_2 = $8, customer_state = $9 WHERE custom_uuid = $10 returning *",
      [
        fullname,
        editCustomerFirstname,
        editCustomerLastname,
        editCustomerEmail,
        editCustomerPhone,
        editCustomerPhone2,
        editCustomerAddress,
        editCustomerAddress2,
        editCustomerState,
        id,
      ]
    );

    res.status(201).json({
      message: "Customer updated successfully",
      data: editQuery.rows,
    });
  } catch (error) {
    // console.log("update ticket error", error);
  }
};
export default updateCustomer;
