import React from 'react'
import { useNavigate } from 'react-router-dom'


function MetaInfoCard() {
  const navigator=useNavigate()
  return (
    <>
    <div onClick={()=>navigator('/student/5124852')} className="card flex-row px-3 py-3">
          <table>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>Ashok</td>
          </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>5724852</td>
            </tr>
          </table>
        </div>
        <div className="card flex-row px-3 py-3">
          <table>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>Ashok</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>5724852</td>
            </tr>
          </table>
        </div>
        <div className="card flex-row px-3 py-3">
          <table>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>Ashok</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>5724852</td>
            </tr>
          </table>
        </div>
        <div className="card flex-row px-3 py-3">
          <table>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>Ashok</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>5724852</td>
            </tr>
          </table>
        </div>
        <div className="card flex-row px-3 py-3">
          <table>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>Ashok</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>5724852</td>
            </tr>
          </table>
        </div>
        <div className="card flex-row px-3 py-3">
          <table>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>Ashok</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>5724852</td>
            </tr>
          </table>
        </div>
    </>
  )
}

export default MetaInfoCard