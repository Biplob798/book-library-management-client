const AddBook = () => {
  return (
    <div>
      <div className="my-12 p-8 bg-white border shadow-md max-w-2xl mx-auto">
        <h2 className="text-3xl text-black font-medium text-center p-6">
          Add Book
        </h2>
        <hr className="mb-6" />

        <form className="space-y-6">
          {/* form Book name */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Book name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Book name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form for Quantity  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Quantity
              </span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form short description  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Author name  */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Brand name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="author"
                placeholder="author name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Book Type  */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Book type
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="type"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Book Rating row  */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-sm text-xl">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Book photo url row  */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-sm text-xl">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Book"
            className="b btn btn-outline bg-green-900 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBook;
