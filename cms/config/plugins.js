module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["firstName", "lastName"],
      },
    },
  },
  io: {
    enabled: true,

    config: {
      // This will listen for all supported events on the article content type
      contentTypes: ["api::product.product"],
      socket: {
        serverOptions: {
          cors: {
            origin: "http://192.168.56.10:4321",
            methods: ["GET", "POST"],
          },
        },
      },
    },
  },
});
