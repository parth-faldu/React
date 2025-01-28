export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInput = Object.fromEntries(formData.entries());
    console.log(formInput);
  };
  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          0
          <form action={handleFormSubmit}>
            <input
              type="text"
              required
              className="form-control"
              autoComplete="off"
              placeholder="enter your name"
              name="username"
            />
            <input
              type="text"
              className="form-control"
              placeholder="enter your email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="10"
              placeholder="enter your message"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
