db.produtos.update(
    { nome: "Big Mac" },
    { $currentDate: { ultimaModificacao: true } },
);

db.produtos.find(
    { ultimaModificacao: { $exists: true } },
    {
        nome: 1,
        _id: 0,
    },
).pretty();
