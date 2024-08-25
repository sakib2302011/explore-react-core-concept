export default function Singer(details) {
  console.log(details);
  return (
    <div>
      <h3>Name: {details.details.name} </h3>
      <h3>Age: {details.details.age} </h3>
    </div>
  );
}
