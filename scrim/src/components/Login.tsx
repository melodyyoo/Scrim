
export default function Login() {
  return (
    <div className="mx-4">
      <label htmlFor="modal-1" className="cursor-pointer">
        Log In
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </label>
          <h2 className="text-xl">Log In</h2>
          <form>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <div className="flex gap-3">
                <button className="btn btn-block" type='submit'>Log In</button>
                <button className="btn btn-block">Cancel</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
