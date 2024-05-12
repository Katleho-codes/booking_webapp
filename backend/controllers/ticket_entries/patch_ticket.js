import { pool } from "../../db.js";

const patchEntry = async (req, res) => {
  const { id } = req.query;
  const { getServiceOrderNumber } = req.body;
  try {
    const editQuery = await pool.query(
      "UPDATE tickets SET service_order_number = $1 WHERE custom_uuid = $2 returning *",
      [getServiceOrderNumber, id]
    );

    res.status(201).json(editQuery.rows);
  } catch (error) {
    // console.log("update ticket error", error);
  }
};
export default patchEntry;
