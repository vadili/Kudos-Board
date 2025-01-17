import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Button from "./Button";
import BoardList from "./BoardList";
import Footer from "./Footer";
import CreateForm from "./CreateForm";
import CardList from "./CardList";

function App() {
  const [displayCreateForm, setDisplayCreateForm] = useState(false);
  const [displayBoardPage, setDisplayBoardPage] = useState(false);

  function handleDisplayBoardPage() {
    setDisplayBoardPage(!displayBoardPage);
  }

  function handleDisplayCreateForm() {
    setDisplayCreateForm(!displayCreateForm);
  }

  return (
    // {!displayBoardPage ? <BoardPage handleDisplayBoardPage={handleDisplayBoardPage}/> : null}

    <div className="App">
      {!displayBoardPage ? (
        <>
          {displayCreateForm ? (
            <CreateForm displayForm={handleDisplayCreateForm} />
          ) : null}

          <Header />

          <main>
            <SearchBar />
            <div className="buttons">
              <Button name="All" />
              <Button name="Recent" />
              <Button name="Celebration" />
              <Button name="Thank You" />
              <Button name="Inspiration" />
            </div>

            <div className="create-buttons">
              <Button
                name="Create New Board"
                displayForm={handleDisplayCreateForm}
              />
            </div>
            <BoardList handleDisplayBoardPage={handleDisplayBoardPage} />
          </main>

          <Footer />
        </>
      ) : (
        <CardList handleDisplayBoardPage={handleDisplayBoardPage} />
      )}
    </div>
  );
}

export default App;
