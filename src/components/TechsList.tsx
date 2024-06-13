import { CVData, CVAction } from "../useCVReducer";

type TechsListProps = {
  cvState: CVData;
  cvDispatch: React.Dispatch<CVAction>;
};

export default function TechsList({ cvState, cvDispatch }: TechsListProps) {
  const techItems = cvState.techs.map((t) => (
    <li key={t.id}>
      <button type="button" onClick={() => handleDeleteTech(t.id)}>
        {t.name}
      </button>
    </li>
  ));

  function handleDeleteTech(id: string) {
    cvDispatch({ type: "REMOVE_TECH_BY_ID", value: id });
  }

  return (
    <div>
      {techItems.length > 0 ? (
        <>
          <p>Para apagar uma tecnologia, basta tocar/clicar nela.</p>
          <ul>{techItems}</ul>
        </>
      ) : (
        <p>
          <i>Suas tecnologias serão exibidas aqui.</i>
        </p>
      )}
    </div>
  );
}
