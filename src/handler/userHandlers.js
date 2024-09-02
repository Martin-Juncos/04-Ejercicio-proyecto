const getUsersHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`Este usuario se llama ${name}`);
  } else {
    res.send("Estos son todos los usuarios");
  }
};
const getUserHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Este es el detalle de un usuario con id ${id}`);
};
const createUserHandler = (req, res) => {
  const { name, username, email } = req.body;
  res.send(
    `Creamos un usuario con nombre ${name}, con username ${username} y su email es ${email}`
  );
};

module.exports = {
  getUserHandler,
  getUsersHandler,
  createUserHandler,
};
