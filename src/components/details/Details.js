import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useLaunches from '../useLaunches/useLaunches'
import Main from '../main/Main'
import Youtube from 'react-youtube'
import './details.css'
import YouTube from 'react-youtube'

const Details = (props) => {

  const [launch, setLaunch] = useState(null)

  const { getLaunch } = useLaunches()

  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id))
  }, [getLaunch])

  console.log(launch);

  const history = useHistory()

  if (!launch) return null
  //preloader

  return (
    <p>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.main} />
            </div>
            <div className="details-content">
              <p className="details-description">{launch?.details}</p>
            </div>
          </div>
          <YouTube className='details-youtube' videoId={launch.links.youtube_id} />
        </div>
        <a onClick={history.goBack} className="button button-back">go back</a>
      </main>
    </p>
  )
}
export default Details