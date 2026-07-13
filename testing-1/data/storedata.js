const createOrder = (orderId) => ({
    id: orderId,
    petId: 4,
    quantity: 1,
    shipDate: "2026-07-07T09:46:38.290Z",
    status: "placed",
    complete: true
});

module.exports = {
    createOrder
};