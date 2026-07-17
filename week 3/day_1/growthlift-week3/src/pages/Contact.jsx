function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" style={{ display: "block", margin: "10px 0" }} />
        <input type="email" placeholder="Your Email" style={{ display: "block", margin: "10px 0" }} />
        <textarea placeholder="Your Message" style={{ display: "block", margin: "10px 0" }}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default Contact;