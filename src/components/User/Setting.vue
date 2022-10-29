<template>
  <div>
    <Header></Header>
    <!-- **************** MAIN CONTENT START **************** -->
    <main>
  <!-- Container START -->
  <div class="container">
    <div class="row">

      <!-- Sidenav START -->
      <div class="col-lg-3">

        <!-- Advanced filter responsive toggler START -->
				<!-- Divider -->
				<div class="d-flex align-items-center mb-4 d-lg-none">
					<button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
						<i class="btn btn-primary fw-bold fa-solid fa-sliders"></i>
            <span class="h6 mb-0 fw-bold d-lg-none ms-2">设置</span>
					</button>
				</div>
				<!-- Advanced filter responsive toggler END -->

        <nav class="navbar navbar-light navbar-expand-lg mx-0">
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
            <!-- Offcanvas header -->
						<div class="offcanvas-header">
							<button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>

            <!-- Offcanvas body -->
            <div class="offcanvas-body p-0">
              <!-- Card START -->
              <div class="card w-100">
                <!-- Card body START -->
                <div class="card-body">

                <!-- Side Nav START -->
                <ul class="nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0">
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <a class="nav-link d-flex mb-0 active" href="#nav-setting-tab-1" data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw" src="/static/images/icon/person-outline-filled.svg" alt=""><span>用户 </span></a>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <a class="nav-link d-flex mb-0" href="#nav-setting-tab-2" data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw" src="/static/images/icon/notification-outlined-filled.svg" alt=""><span>通知 </span></a>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <a class="nav-link d-flex mb-0" href="#nav-setting-tab-3" data-bs-toggle="tab"> <img class="me-2 h-20px fa-fw" src="/static/images/icon/chat-outline-filled.svg" alt=""><span>消息 </span></a>
                  </li>
                </ul>
                <!-- Side Nav END -->

              </div>
              <!-- Card body END -->
              </div>
            <!-- Card END -->
            </div>
            <!-- Offcanvas body -->
          </div>
        </nav>
      </div>
      <!-- Sidenav END -->

        <!-- Main content START -->
        <div class="col-lg-6 vstack gap-4">
          <!-- Setting Tab content START -->
          <div class="tab-content py-0 mb-0">

            <UserSetting></UserSetting>

            <!-- Notification tab START -->
            <div class="tab-pane fade" id="nav-setting-tab-2">
              <!-- Notification START -->
              <div class="card">
                <!-- Card header START -->
                <div class="card-header border-0 pb-0">
                  <h5 class="card-title">Notification</h5>
                  <p class="mb-0">Tried law yet style child. The bore of true of no be deal. Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed. </p>
                </div>
                <!-- Card header START -->
                <!-- Card body START -->
                <div class="card-body pb-0">
                  <!-- Notification START -->
                  <ul class="list-group list-group-flush">
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Likes and Comments</h6>
                        <p class="small mb-0">Joy say painful removed reached end.</p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked" checked>
                      </div>
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Reply to My comments</h6>
                        <p class="small mb-0">Ask a quick six seven offer see among.</p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked2" checked>
                      </div>
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Subscriptions</h6>
                        <p class="small mb-0">Preference any astonished unreserved Mrs.</p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked3">
                      </div>
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Birthdays</h6>
                        <p class="small mb-0">Contented he gentleman agreeable do be</p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked4">
                      </div>
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Events</h6>
                        <p class="small mb-0">Fulfilled direction use continually.</p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked5" checked>
                      </div>
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item px-0 py-3">
                      <!-- Accordion START -->
                      <div class="accordion accordion-flush border-0" id="emailNotifications">
                        <!-- Accordion item -->
                        <div class="accordion-item bg-transparent">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <a href="#!" class="accordion-button mb-0 p-0 collapsed bg-transparent shadow-none" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              <span>
                                <span class="mb-0 h6 d-block">Email notifications</span>
                                <small class="small mb-0 text-secondary">As hastened oh produced prospect. </small>
                              </span>
                            </a>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#emailNotifications">
                            <div class="accordion-body p-0 pt-3">
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="NotiSwitchCheckChecked6" checked>
                                  <label class="form-check-label" for="NotiSwitchCheckChecked6">
                                    Product emails
                                  </label>
                                </div>
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="NotiSwitchCheckChecke7">
                                  <label class="form-check-label" for="NotiSwitchCheckChecke7">
                                    Feedback emails
                                  </label>
                                </div>
                                <hr>
                              <div class="mt-3">
                                <h6>Email frequency</h6>
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio1">
                                  <label class="form-check-label" for="NotiRadio1">
                                    Daily
                                  </label>
                                </div>
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio2" checked>
                                  <label class="form-check-label" for="NotiRadio2">
                                    Weekly
                                  </label>
                                </div>
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio3">
                                  <label class="form-check-label" for="NotiRadio3">
                                    Periodically
                                  </label>
                                </div>
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="NotiRadio" id="NotiRadio4" checked>
                                  <label class="form-check-label" for="NotiRadio4">
                                    Off
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Accordion END -->
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Push notifications</h6>
                        <p class="small mb-0">Rendered six say his striking confined. </p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked8" checked>
                      </div>
                    </li>
                    <!-- Notification list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                      <div class="me-2">
                        <h6 class="mb-0">Weekly account summary <span class="badge bg-primary smaller"> Pro only</span> </h6>
                        <p class="small mb-0">Rendered six say his striking confined. </p>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked9" disabled>
                      </div>
                    </li>
                  </ul>
                  <!-- Notification END -->
                  
                </div>
              <!-- Card body END -->
              <!-- Button save -->
              <div class="card-footer pt-0 text-end border-0">
                <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
            </div>
              <!-- Notification END -->
            </div>
            <!-- Notification tab END -->

            <!-- Messaging tab START -->
            <div class="tab-pane fade" id="nav-setting-tab-3">
              <!-- Messaging privacy START -->
              <div class="card mb-4">
                <!-- Title START -->
                <div class="card-header border-0 pb-0">
                  <h5 class="card-title">Messaging privacy settings</h5>
                  <p class="mb-0">As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived. </p>
                </div>
                <!-- Title START -->
                <div class="card-body">
                  <!-- Settings style START -->
                  <ul class="list-group list-group-flush">
                    <!-- Message list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Enable message request notifications</h6>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked" checked>
                      </div>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Invitations from your network</h6>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked2" checked>
                      </div>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Allow connections to add you on group</h6>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked3">
                      </div>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Reply to comments</h6>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked4">
                      </div>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Messages from activity on my page or channel</h6>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked5" checked>
                      </div>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Personalise tips for my page</h6>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked6" checked>
                      </div>
                    </li>
                  </ul>
                  <!-- Message END -->
              </div>
               <!-- Button save -->
               <div class="card-footer pt-0 text-end border-0">
                <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
              </div>
              <!-- Messaging privacy END -->
              <!-- Messaging experience START -->
              <div class="card">
                <!-- Card header START -->
                <div class="card-header border-0 pb-0">
                  <h5 class="card-title">Messaging experience</h5>
                  <p class="mb-0">Arrived off she elderly beloved him affixed noisier yet. </p>
                </div>
                <!-- Card header START -->
                <!-- Card body START -->
                <div class="card-body">
                  <!-- Message START -->
                  <ul class="list-group list-group-flush">
                    <!-- Message list item -->
                    <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Read receipts and typing indicators</h6>
                      </div>
                      <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i class="bi bi-pencil-square"></i> Change</button>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Message suggestions</h6>
                      </div>
                      <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i class="bi bi-pencil-square"></i> Change</button>
                    </li>
                    <!-- Message list item -->
                    <li class="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                      <div class="me-2">
                        <h6 class="mb-0">Message nudges</h6>
                      </div>
                      <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i class="bi bi-pencil-square"></i> Change</button>
                    </li>
                  </ul>
                  <!-- Message END -->
                </div>
              <!-- Card body END -->
               <!-- Button save -->
               <div class="card-footer pt-0 text-end border-0">
                <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
              </div>
              </div>
              <!-- Messaging experience END -->
            </div>
            <!-- Messaging tab END -->

          </div>
          <!-- Setting Tab content END -->
        </div>

    </div> <!-- Row END -->
  </div>
  <!-- Container END -->

</main>
    <!-- **************** MAIN CONTENT END **************** -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import UserSetting from "@/components/User/UserSetting";
export default {
  components: { Header, UserSetting },
  name: "Setting",
  data() {
    return {

    };
  },
  mounted() {
    
  }
};
</script>
