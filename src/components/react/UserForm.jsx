import moment from 'moment'
import { navigate } from 'astro:transitions/client'
import axios from 'axios'


const UserForm = ({user}) => {
    const getData = async (e) => {
      try {
        e.preventDefault()
        const form = {
            name: e.target['name'].value,
            email: e.target['email'].value,
            password: e.target['password'].value
        }

        const {data} = await axios.patch(`http://localhost:8888/users/${user.id}`, form)
        if(data.success){
          navigate("/users")
        }
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <form onSubmit={getData} className="flex flex-col w-full gap-2 pb-28">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>Id</td>
                <td>
                  <label className="form-control">
                    <input id="id" type="text" readOnly disabled defaultValue={user.id} className="input input-bordered w-full" />
                  </label>
                </td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td>Name</td>
                <td>
                  <label className="form-control">
                    <input id="name" type="text" name="name" defaultValue={user.name} className="input input-bordered " autoComplete='on'/>
                  </label>
                </td>
              </tr>
              {/* <!-- row 3 --> */}
              <tr>
                <td>Email</td>
                <td>
                  <label className="form-control">
                    <input id="email" type="text" name="email" defaultValue={user.email} className="input input-bordered " autoComplete='on'/>
                  </label>
                </td>
              </tr>
              {/* <!-- row 4 --> */}
              <tr>
                <td>Password</td>
                <td>
                  <label className="form-control">
                    <input id="password" type="password" name="password" placeholder="your password ..." className="input input-bordered " />
                  </label>
                </td>
              </tr>
              {/* <!-- row 5 --> */}
              <tr>
                <td className='w-28'>Created at</td>
                <td>
                  <label className="form-control">
                    <input id="created_at" type="text" readOnly disabled defaultValue={moment(user.created_at).format('LLLL')} className="input input-bordered" />
                  </label>
                </td>
              </tr>
              {/* <!-- row 6 --> */}
              <tr>
                <td>Updated at</td>
                <td>
                  <label className="form-control">
                    <input id="updated_at" type="text" readOnly disabled defaultValue={moment(user.updated_at).format('LLLL') == 'Invalid date' ? '' : moment(user.updated_at).format('LLLL')} className="input input-bordered" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" className="btn hover:bg-amber-500 hover:text-[#191D24]">Update</button>
      </form>
    )
}

export default UserForm