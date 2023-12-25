import ContactForm from '../hooks/formValidation';
export default function Contact() {
    const { name, setName, email, setEmail, message, setMessage, handleSubmit, errorMessage } = ContactForm();
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-50 text-white py-3">
        <h1 className="text-3xl font-bold mb-8">Contact me</h1>
        <form className="w-full max-w-[40rem] bg-slate-500 bg-opacity-50 shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }