## Setup

    Create 3 components:
     - Tours
     - Tour
     - Loading

`In each of these components we will define a React functional component that returns JSX code for rendering the respective component`

## Fetch Tours

    The Tours component will be responsible for rendering the list of Tour Components.
    In App component the tours data will be fetched from a URL using fetch API.
    Loading spinner will be displayed before the data is loaded which will be implemented using the Loading Component.

## Render Tours

    Once the data is loaded, we can set the state of our component to store tours data. Then mapping will happen over the tours array and render a Tour Component for each tour. Each Tour component will receive the tour data as props, including the tour's id, image, info, name and price.

## Remove Tours:

    For implementation of this functionality, we will add a button to each of Tour Component when clicked will remove the tour from the list of tours. We will get this by updating the state of Tours Component to remove the tour from the tours array.

## Read More:

To implement this function, we will add a button to each Tour Component when clicked will expand the description of tour. We will achieve this function by updating the state of Tour Component to toggle a 'read more' and rendering it conditionally based on the condition.

## Re-fetch Tours

To implement this function, we will add a button or other user interface element that when clicked will re-fetch the tours data form the URL and update the state of Tours. We can also add a loading state again during the re-fetching process.

Overall, the flow of the application will look like:

> > App component will fetch tours data from a URL and will set the state of Tours to store the data.
> > The Tours will then map over the tours array and renders a Tour component for each tour.
> > Each Tour component will have a "remove tour " button and a "read more button".
> >
> > > > > When remove button is clicked the tour will be removed and the state will be updated , when read more is clicked Tour component will be updates its state to toggle and render
> > > > > When the "re-fetch" button is clicked, the Tours component re-fetches the tours data from the URL and updates its state
