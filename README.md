# Project Name

This project consists of a Strapi backend, a frontend website, and Vagrant setup for the development environment.

## Login Credentials for Strapi

To access the Strapi admin panel, use the following credentials:

- **Email**: hasanabbas78six@gmail.com
- **Password**: XtpvGNNk46AVgTu

## Strapi Setup

To set up Strapi, follow these steps:

1. Navigate to the project directory.
2. Run the following commands:

   ```bash
   sudo yarn install
   sudo yarn run develop
   ```

This will install the necessary dependencies and start the Strapi server in development mode.

## Frontend Website Setup

To set up the frontend website, follow these steps:

1. Navigate to the frontend project directory.
2. Run the following commands:

   ```bash
   sudo pnpm run install
   sudo pnpm run dev --host
   ```

This will install the required dependencies and start the development server with hosting enabled.

## Vagrant Setup

To set up the development environment using Vagrant, follow these steps:

1. Navigate to the Vagrant project directory.
2. Run the following commands:

   ```bash
   sudo vagrant up
   sudo vagrant ssh
   ```

This will bring up the Vagrant box and give you SSH access to the virtual machine.

## Postman Collection

The Postman collection for API testing is present in the project. You can import the collection into Postman to easily test API endpoints.

Make sure you have Postman installed, and follow these steps:

1. Open Postman.
2. Click on **Import**.
3. Select the Postman collection file from the project directory and import it.

## Additional Notes

- Ensure that you have all the required dependencies such as `Yarn`, `PNPM`, and `Vagrant` installed before running the respective commands.
- For any issues during setup, refer to the project documentation or raise an issue in the project repository.
