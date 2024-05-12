import { pool } from "../../db.js";

const updateEntry = async (req, res) => {
  const {
    fault,
    faultOccurence,
    assetType,
    ticketNumber,
    updatedAt,
    modelNumber,
    serialNumber,
    specialRequirement,
    IMEI,
    isBackUpNeedCheckboxEnabled,
    warranty,
    phoneNumber,
    address,
    address2,
    city,
    state,
    zip,
    department,
    originalTicketId,
    customerId,
    assetId,
    customUUID,
  } = req.body;
  try {
    const editQuery = await pool.query(
      "UPDATE tickets SET unit_fault = $1, fault_occurence = $2, type_of_unit = $3, ticket_number = $4, updated_at = $5, model_number = $6, serial_number = $7, special_requirement = $8, imei = $9, backup_needed = $10, warranty_period = $11, customer_phone = $12, customer_address = $13, customer_address_2 = $14, customer_city = $15, customer_state = $16, customer_zip = $17, department = $18, original_ticket_id = $19, original_customer_id = $20, original_asset_id = $21 WHERE custom_uuid = $22 returning *",
      [
        fault,
        faultOccurence,
        assetType,
        ticketNumber,
        updatedAt,
        modelNumber,
        serialNumber,
        specialRequirement,
        IMEI,
        isBackUpNeedCheckboxEnabled,
        warranty,
        phoneNumber,
        address,
        address2,
        city,
        state,
        zip,
        department,
        originalTicketId,
        customerId,
        assetId,
        customUUID,
      ]
    );

    res.status(201).json(editQuery.rows);
  } catch (error) {
    // console.log("update ticket error", error);
  }
};
export default updateEntry;
