import { pool } from "../../db.js";

const updateAssets = async (req, res) => {
  const { id } = req.params;
  const { editSerialNumber, editModelNumber } = req.body;

  try {
    const editQuery = await pool.query(
      "UPDATE tickets SET serial_number = $1, model_number = $2 WHERE custom_uuid = $3 returning *",
      [editSerialNumber, editModelNumber, id]
    );

    res.status(201).json({
      message: "Assets updated successfully",
      data: editQuery.rows,
    });
  } catch (error) {
    // console.log("update ticket error", error);
  }
};
export default updateAssets;
