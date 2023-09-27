import React from 'react'
import '../Styles/Team.scss'
function Team() {

    const ourteam = [
        {
            'id':1,
            'team_member': require('../Images/team-1.jpg'),
            'name': 'Rose Ford ',
            'skills': 'Manager'
        },
        {
            'id':2,
            'team_member': require('../Images/team-2.jpg'),
            'name': 'Mike Olsen',
            'skills': 'Worker'
        },
        {
            'id':3,
            'team_member': require('../Images/team-3.jpg'),
            'name': 'Emmyson',
            'skills': 'Founder'
        },
        {
            'id':4,
            'team_member': require('../Images/team-4.jpg'),
            'name': 'John Smith',
            'skills': 'Worker'
        }
    ]

    return (
        <div className='team_member_area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='section-title'>
                            <h1>Meet The Team</h1>
                        </div>
                    </div>
                    {ourteam.map(item => (
                        <div className='col-md-3 col-sm-6' key={item.id}>
                            <div className='team_member'>
                                <img src={item.team_member} />
                                <div className='team_details'>
                                    <h3>
                                        {item.name}
                                        <span className="skills">- {item.skills}</span>
                                    </h3>
                                    <ul className='team_socials'>
                                        <li>
                                            <a href=""><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-youtube-play"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
