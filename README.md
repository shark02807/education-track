# Education track

The App - online platform provided well organized courses and material from different topics.

The Content page - is a list of available tracks.

The Track Details page is a detailed view of a track, which should be accessible from one of the card items on the content page.

## Frontend

You can run the project with `npm run start` after installing dependencies with `npm install`.

Storybook can be laucnhed with `npm run storybook`.

Below is a list of technologies used:

  * [React](https://reactjs.org/)
  * [React Router](https://reacttraining.com/react-router/)
  * [TailwindCSS](https://tailwindcss.com/)
  * [Storybook](https://storybook.js.org/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [Jest](https://jestjs.io/)
  * [MSWJS](https://mswjs.io/)

## Backend

The backend should already be available and you can get the full track from `https://api.education-track.com/track/:trackID`. This URL is mocked in the frontend with MSWJS, and you can explore the data in the `src/mock/` directory.

# App domains

'play' - is the folder for 'tracks' domain of the app. Here should be routes for separate pages such as: '/tracks', '/track/:trackId'. 
It's assumed another domains of the app should be added later. For example, on same level as 'play' folder, 'courses' folder could be added with the same separate routes: '/courses', '/course/:courseId'

# Structure

lib - folder for reusable components
lib/atoms - the smallest components, could be used as a bricks for bigger one. Atoms should not import any other component.
lib/molecules - could use composition of Atoms to render data
lib/organisms - could use composition of Molecules to render data. Could represents parts of pages.

{app_domain}/organisms - organisms from 'lib/organisms' with specific settings for certain domain of the app. For example: 'play/organisms'.

# App Storage

Storing data:
- tracks list
- track details

React Context API is used to store data inside the app.
Due to small amount of data and no need to share data between components - Context is better for current purposes rather then any state management package. 
- No need to add additional dependency.
- Still possible to handle data inside the app using providers and consumers.
- Separate providers can be added to different app domains.

# Styling

For creating markup TailWindCss was chosen due to fast and easiest way to create suitable markup

# Tests

During the implementation a few tests were added.
For testing were used "@testing-library/react" package.

# Storybook

Also part of the components listed in the Storybook as an example how they could be rendered under different conditions.
