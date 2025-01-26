function status(request, response) {
  response.status(200).json({ chave: "victor diniz" });
}

export default status;
