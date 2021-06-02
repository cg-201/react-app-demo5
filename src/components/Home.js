export function Home() {
  return (
    <div>
      {/** CAPTURE INPUT HERE  */}
      <div className="d-flex mt-2 mx-4">
        <input
          className="form-control w-75"
          type="text"
          placeholder="tweer here"
        />
        <input type="button" className="w-25 btn btn-secondary" value="Tweet" />
      </div>

      {/** DISPLAY TWEET HERE */}
      <div className="mx-4 mt-4">
        <h4 className="text-secondary">Tweet 1</h4>
      </div>
    </div>
  );
}
