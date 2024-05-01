import moment from 'moment'


const UserForm = ({user}) => {
    const getData = async (e) => {
        e.preventDefault()
        const form = {
            name: e.target['name'].value,
            email: e.target['email'].value
        }
        console.log(form)
    }

    return (
        <form onSubmit={getData} className="flex flex-col w-full gap-2 pb-28">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td className="w-5">Id</td>
                <td>
                  <label className="form-control">
                    <input type="text" readOnly disabled defaultValue={user.id} className="input input-bordered w-full" />
                  </label>
                </td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td>Name</td>
                <td>
                  <label className="form-control">
                    <input type="text" name="name" defaultValue={user.name} className="input input-bordered " />
                  </label>
                </td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <td>Email</td>
                <td>
                  <label className="form-control">
                    <input type="text" name="email" defaultValue={user.email} className="input input-bordered " />
                  </label>
                </td>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <td>Password</td>
                <td>
                  <label className="form-control">
                    <input type="text" name="password" defaultValue={user.password} className="input input-bordered " />
                  </label>
                </td>
              </tr>
              {/* <!-- row 5 --> */}
              <tr>
                <td>Created</td>
                <td>
                  <label className="form-control">
                    <input type="text" readOnly disabled defaultValue={moment(user.created_at).format('LLLL')} className="input input-bordered" />
                  </label>
                </td>
              </tr>
              {/* <!-- row 6 --> */}
              <tr>
                <td>Updated</td>
                <td>
                  <label className="form-control">
                    <input type="text" readOnly disabled defaultValue={moment(user.updated_at).format('LLLL') == 'Invalid date' ? '' : moment(user.updated_at).format('LLLL')} className="input input-bordered" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
    )
}

export default UserForm