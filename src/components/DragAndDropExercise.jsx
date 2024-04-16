// DragAndDropExercise.jsx

const DragAndDropExercise = ({ questions }) => {
  const [droppedWords, setDroppedWords] = useState([]);

  const handleDrop = (wordId, sentenceId) => {
    // Logic to handle dropping words into sentences
    const word = {
      id: wordId,
      slotIndex: sentenceId,
      content: questions[sentenceId - 1].options[wordId - 1],
    };
    const updatedDroppedWords = [...droppedWords.filter((w) => w.slotIndex !== sentenceId), word];
    setDroppedWords(updatedDroppedWords);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {questions.map((question) => (
        <div key={question.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ marginRight: '20px' }}>
            {question.options.map((option, index) => (
              <Word key={index} id={index + 1} content={option} />
            ))}
          </div>
          <div>
            <Sentence id={question.id} content={question.sentence} onDrop={handleDrop} droppedWords={droppedWords.filter((w) => w.slotIndex === question.id)} />
          </div>
        </div>
      ))}
    </DndProvider>
  );
};
