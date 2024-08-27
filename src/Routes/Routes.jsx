import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ListsBook from "../Components/Home/ListsBook";
import PageRead from "../Components/Home/PageRead";
import BookDetails from "../Components/BookCard/BookDetails/BookDetails";
import ReadBooks from "../Components/Home/ReadBooks";
import WishlistBooks from "../Components/Home/WishlistBooks";
import MoreBooks from "../Components/MoreBooks/MoreBooks";
import FavouritBooks from "../Components/FavouriteBooks/FavouritBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <ListsBook></ListsBook>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: "wishListBooks", 
            element: <WishlistBooks></WishlistBooks>,
          }
        ]
      },
      {
        path: "/pageread",
        element: <PageRead />,
        loader: () => fetch("/data.json")
          .then(res => res.ok ? res.json() : [])
          .catch(() => []) 
      },
      {
        path: "/book-detals/:id",
        element: <BookDetails></BookDetails>
      },
      {
        path: '/favouriteBooks',
        element: <FavouritBooks></FavouritBooks>
      },
      {
        path: "/morebooks",
        element: <MoreBooks></MoreBooks>
      }
    ]
  },
]);