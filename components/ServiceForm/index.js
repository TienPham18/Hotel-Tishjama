function formatDate(date) {
  if (date) {
    return new Date(date).toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

export default function ServiceForm({ onSubmit, service = {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="ServiceForm">
      <label htmlFor="name">service Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={service.name}
        required
      />

      <label htmlFor="image">Image: </label>
      <input id="image" name="image" type="text" defaultValue={service.image} />

      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        name="description"
        cols="20"
        rows="4"
        defaultValue={service.description}
        required
      ></textarea>

      <label htmlFor="date">Date: </label>
      <input
        id="date"
        name="date"
        type="date"
        defaultValue={formatDate(service.date)}
        required
      />

      <label htmlFor="time">Time: </label>
      <input
        id="time"
        name="time"
        type="time"
        defaultValue={service.time}
        required
      />

      <label htmlFor="price">Price: </label>
      <input
        id="price"
        name="price"
        type="number"
        defaultValue={service.price}
        required
      />
      <span> EUR</span>

      <button type="submit">{service.name ? "Save" : "Add"}</button>
    </form>
  );
}