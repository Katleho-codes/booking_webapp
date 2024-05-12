import express from "express";
import addEntry from "../../controllers/ticket_entries/create_ticket_entry.js";
import updateEntry from "../../controllers/ticket_entries/update_ticket_entry.js";
import getAllTickets from "../../controllers/ticket_entries/get_tickets.js";
import getOneTicket from "../../controllers/ticket_entries/get_one_ticket.js";
import patchEntry from "../../controllers/ticket_entries/patch_ticket.js";
import { limiter } from "../../middleware/rateLimiter.js";
import updateCustomer from "../../controllers/ticket_entries/updateCustomer.js";
import updateAssets from "../../controllers/ticket_entries/update_assets.js";
const router = express.Router();

router.post("/entry", limiter, addEntry);
router.put("/:customUUID", updateEntry);
router.put("/customer/:customUUID", updateCustomer);
router.put("/assets/:customUUID", updateAssets);
router.patch("/:customUUID", patchEntry);
router.get("/tickets", getAllTickets);
router.get("/tickets/:id", getOneTicket);

export { router };
