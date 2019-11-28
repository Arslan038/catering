module.exports = (app) => {
    const customer_controller = require('../controllers/customer.controller');

    // Customer Registration
    app.post('/api/customer_signup', customer_controller.signup);

    // Customer Login
    app.post('/api/customer_login', customer_controller.login)

    // Customer Details
    app.get('/api/customer_details/:id', customer_controller.customer_details)

    // All Customers
    app.get('/api/customers', customer_controller.customers)

    // Update Customer
    app.put('/api/update_customer/:id', customer_controller.update_customer);

    // Delete Customer
    app.delete('/api/delete_customer/:id', customer_controller.delete_customer);
    
}