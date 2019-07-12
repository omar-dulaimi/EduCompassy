import React, { Component, Fragment } from 'react';
import '../../../index.css';

class Events extends Component {

    render() {
        return (
            <div>
            <Fragment>
                <h1 className="myHeading1">Events Component</h1>
                    <div >
                        <div className="tableCenter">
                        <form>
                                <label htmlFor="event_name" className="" > Event Name  </label>
                                <input type="text" id="event_type" placeholder="Event Name" />
                                <label htmlFor="event_date" className=""> Event Date </label>
                                <input type="text" id="event_date" placeholder="yyyy/mm/dd" />
                                <label htmlFor="event_id" className="" placeholder="Event ID"> Event ID  </label>
                                <input type="text" id="event_id" />
                                <button type="submit">Add Event</button>
                            </form>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sunday</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Monday</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Tuesday</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Wednesday</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Thursday</a>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <div className="card">
                                <div className="card-body">
                                </div>
                                <img className="card-img-bottom" src="https://www.melbourneshowgrounds.com/media/1359/stereosonic_2014_banner_1680x450_s5a8948.jpg?height=450&width=1680&mode=crop" alt="Card image cap" />
                            </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="tableCenter">
                                    <div className="card-deck">
                                        <div className="card">
                                            <img className="card-img-top" src="https://feletviolix.files.wordpress.com/2016/01/biblical-math-2.jpg?w=350&h=200&crop=1" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">Meeting</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">Meeting</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">Meeting</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-deck">
                                        <div className="card">
                                            <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg" alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">I.T</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"  />
                                            <div className="card-body">
                                                <h5 className="card-title">Party</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg" />
                                            <div className="card-body">
                                                <h5 className="card-title">Party</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>..........</div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div className="tableCenter">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">Meeting</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://feletviolix.files.wordpress.com/2016/01/biblical-math-2.jpg?w=350&h=200&crop=1"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Conference</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="http://pragmaticcompendium.com/wp-content/uploads/2013/08/caps-lock-equals-shouting.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">I.T</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"  />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>...</div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className="tableCenter">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="https://feletviolix.files.wordpress.com/2016/01/biblical-math-2.jpg?w=350&h=200&crop=1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Math</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"  />
                                        <div className="card-body">
                                            <h5 className="card-title">Music</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="http://pragmaticcompendium.com/wp-content/uploads/2013/08/caps-lock-equals-shouting.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">I.T</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>...</div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className="tableCenter">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="https://feletviolix.files.wordpress.com/2016/01/biblical-math-2.jpg?w=350&h=200&crop=1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Math</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Music</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="http://pragmaticcompendium.com/wp-content/uploads/2013/08/caps-lock-equals-shouting.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">I.T</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"  />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>...</div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div className="tableCenter">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product7/113/e029294.tif/_jcr_content/renditions/e029294-medium.jpg"  />
                                        <div className="card-body">
                                            <h5 className="card-title">Science</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src="http://pragmaticcompendium.com/wp-content/uploads/2013/08/caps-lock-equals-shouting.jpg" />
                                        <div className="card-body">
                                            <h5 className="card-title">I.T</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src="http://www.guitarbitz.com/downloads/1420803550Guitar-Tutors.jpg"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                                <h6 className="card-title">2 Feb 11:00 - 12:00 </h6>

                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>...</div>

                        </div>
                    </div>
                </Fragment>
            </div>
        )
    }

}
export default Events;


