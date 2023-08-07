const InfoList = ({ info }) => {
  if (!info) {
    return <p>No info to display</p>;
  }
  return (
    <ul>
      <li>Name: {info.name}</li>
      <li>Email: {info.email}</li>
      <li>Country: {info.country}</li>
    </ul>
  );
};
export default InfoList;
