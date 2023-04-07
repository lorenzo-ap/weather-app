# Weather App

This Weather App is a web application built with React and TypeScript.
<br>
It allows users to view weather forecasts for their current location and search for weather forecasts for different cities.

![Application usage](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTk1N2UzNzQ3ZWI1OTc1YWMyODg0MzIyMDYyZmQxMWQ3NjI2NDI0MiZjdD1n/woo8zxAVjXyLGNsvxO/giphy.gif)

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

## Packages used:

- **Axios**: This package handles HTTP requests to the API and processes the received data, simplifying the process of making API requests.
- **Moment**: It provides an easy-to-use API for manipulating and formatting dates and times, making it easier to display date and time information.
- **Tailwind**: Using pre-defined utility classes, this package styles the application and is a popular choice for styling React applications due to its simplicity and flexibility.
- **Sass**: This package preprocesses the CSS for the application, providing a more powerful and flexible way of writing CSS that's easier to manage and maintain.
- **React-icons**: Providing a set of pre-defined icons, this package can be used in the application to enhance its user interface.
- **React-use-draggable-scroll**: This package implements a draggable component that allows users to scroll through the forecast for the next 24 hours, enhancing the user experience of the application.

## Features:

- The application provides a detailed weather forecast for the user's current location over the next 24 hours.
- Users can check the weather forecast for the upcoming week with the application's 7-day forecast feature.
- Favorite cities: Users can add and remove cities from their list of favorite cities. The favorite cities are stored in the local storage, so they remain even if the user closes and reopens the application.
- Search for different cities: Users can search for the weather forecast for different cities by entering the city name in the search bar.
- Light/Dark themes: The application supports both light and dark themes. The theme is automatically selected based on the user's time of day.

## Additional features:

- **Typed components**: The application uses TypeScript to type the components, making it easier to catch errors and improve maintainability.
- **Semantic markup**: The application uses semantic HTML tags to improve accessibility and SEO.
- **Responsive design**: The application is fully responsive and adapts to different screen sizes.
- **Weather images**: The application displays different images based on the current weather, temperature and humidity. For example, if the temperature is low, the weather image shows an empty thermometer, and if the humidity is high, the weather image shows a full drop.
