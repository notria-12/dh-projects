const fs = require("fs");
const path = require("path");

 const utils = require('../utils/saveData')

const contacts = require("../data/contacts")
const { cards } = require("../data/cards")

module.exports = {
  list(req, res, next) {
    res.render('contacts', { contacts });
  },

  create(req, res, next) {
    let id = contacts.length + 1
    let contact = { id, ...req.body }
    contacts.push(contact)


    utils.saveData(contacts, "contacts.js");

    res.render('index', { cards, added: true });
  }, 

  edit(req, res, next) {
    let id = req.params.id;
    let contact = contacts.find(contato => id == contato.id);

    res.render('edit-contact', { contact });
  },

  update(req, res, next) {
    let id = req.params.id;
    let { nome, email, mensagem } = req.body;
    let contact = contacts.find(contact => contact.id == id);

    contact.name = nome
    contact.email = email
    contact.message = mensagem

    utils.saveData(contacts, "contacts.js");

    res.render('edit-contact', { contact, updated: true })
  },

  delete(req, res, next) {
    let id = req.params.id;
    contacts.splice(id - 1, 1);

    utils.saveData(contacts, "contacts.js");

    res.render('contacts', { contacts, deleted: true });
  },
}



