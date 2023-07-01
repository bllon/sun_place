<template>
  <div>
    <Header></Header>

    <main>

      <!-- Container START -->
      <div class="container">
        <div class="row gx-0">
          <!-- Sidebar START -->
          <div class="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">

            <!-- Divider -->
            <div class="d-flex align-items-center mb-4 d-lg-none">
              <button class="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <i class="btn btn-primary fw-bold fa-solid fa-sliders"></i>
                <span class="h6 mb-0 fw-bold d-lg-none ms-2">对话列表</span>
              </button>
            </div>
            <!-- Advanced filter responsive toggler END -->
            <div class="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
              <div class=" d-flex justify-content-between align-items-center">
                <h1 class="h5 mb-0">对话列表 <span class="badge bg-success bg-opacity-10 text-success">6</span></h1>
                <!-- Chat new create message item START -->
                <div class="dropend position-relative">
                  <div class="nav">
                    <a class="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn"
                      data-target="chatToast" href="#"> <i class="bi bi-pencil-square"></i> </a>
                  </div>
                </div>
                <!-- Chat new create message item END -->
              </div>
            </div>

            <nav class="navbar navbar-light navbar-expand-lg mx-0">
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
                <!-- Offcanvas header -->
                <div class="offcanvas-header">
                  <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas"></button>
                </div>

                <!-- Offcanvas body -->
                <div class="offcanvas-body p-0">
                  <div class="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">

                    <!-- Search chat START -->
                    <form class="position-relative">
                      <input class="form-control py-2" type="search" placeholder="搜索对话" aria-label="Search">
                      <button
                        class="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit">
                        <i class="bi bi-search fs-5"></i>
                      </button>
                    </form>
                    <!-- Search chat END -->
                    <!-- Chat list tab START -->
                    <div class="mt-4 h-100">
                      <div class="chat-tab-list custom-scrollbar">
                        <ul class="nav flex-column nav-pills nav-pills-soft">
                          <li data-bs-dismiss="offcanvas">
                            <!-- Chat user tab item -->
                            <a href="#chat-1" class="nav-link active text-start" id="chat-1-tab" data-bs-toggle="pill"
                              role="tab">
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar me-2">
                                  <img class="avatar-img rounded-circle"
                                    src="http://127.0.0.1:8888/image/c2bbe1614ac6251175a163f197ee9475.jpg" alt="">
                                </div>
                                <div class="flex-grow-1 d-block">
                                  <h6 class="mb-0 mt-1">AI画图</h6>
                                  <div class="small text-secondary">根据描述生成你想要的图片.</div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <!-- Chat user tab item -->
                          <li data-bs-dismiss="offcanvas">
                            <a href="#chat-2" class="nav-link text-start" id="chat-2-tab" data-bs-toggle="pill"
                              role="tab">
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar me-2">
                                  <img class="avatar-img rounded-circle"
                                    src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                                </div>
                                <div class="flex-grow-1 d-block">
                                  <h6 class="mb-0 mt-1">小说作家</h6>
                                  <div class="small text-secondary">助你你的小说梦🤙</div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- Chat list tab END -->
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <!-- Sidebar START -->

          <!-- Chat conversation START -->
          <div class="col-lg-8 col-xxl-9">
            <div class="card card-chat rounded-start-lg-0 border-start-lg-0">
              <div class="card-body h-100">
                <div class="tab-content py-0 mb-0 h-100" id="chatTabsContent">
                  <!-- Conversation item START -->
                  <div class="fade tab-pane show active h-100" id="chat-1" role="tabpanel" aria-labelledby="chat-1-tab">
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/c2bbe1614ac6251175a163f197ee9475.jpg" alt="">
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">AI画图</h6>
                          <div class="small text-secondary">根据描述生成你想要的图片.
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="dropdown">
                          <a class="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#"
                            id="chatcoversationDropdown" role="button" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside" aria-expanded="false"><i
                              class="bi bi-three-dots-vertical"></i></a>
                          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                            <li><a class="dropdown-item" href="#"><i class="bi bi-trash me-2 fw-icon"></i>删除对话</a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#"><i class="bi bi-archive me-2 fw-icon"></i>备份对话</a></li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr>
                    <!-- Chat conversation START -->
                    <div class="chat-conversation-content overflow-auto custom-scrollbar">
                      <!-- Chat time -->
                      <div class="text-center small my-2">2023/7/1 14:33</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/c2bbe1614ac6251175a163f197ee9475.jpg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper
                                allowance am northward😊</div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward
                              subject my cottage Mr be.</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/c2bbe1614ac6251175a163f197ee9475.jpg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">Please find the attached updated
                                files</div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/c2bbe1614ac6251175a163f197ee9475.jpg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">How promotion excellent curiosity
                                yet attempted happiness Gay prosperous impression😮</div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">And sir dare view but over man So at
                              within mr to simple assure Mr disposing.</div>
                            <!-- Images -->
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward
                              subject my cottage Mr be.</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward
                              subject my cottage Mr be.</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward
                              subject my cottage Mr be.</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                  <!-- Conversation item START -->
                  <div class="fade tab-pane h-100" id="chat-2" role="tabpanel" aria-labelledby="chat-2-tab">
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">小说作家</h6>
                          <div class="small text-secondary">助你你的小说梦🤙</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- Card action START -->
                        <div class="dropdown">
                          <a class="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#"
                            id="chatcoversationDropdown2" role="button" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside" aria-expanded="false"><i
                              class="bi bi-three-dots-vertical"></i></a>
                          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown2">
                            <li><a class="dropdown-item" href="#"><i class="bi bi-trash me-2 fw-icon"></i>删除对话</a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#"><i class="bi bi-archive me-2 fw-icon"></i>备份对话</a></li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr>
                    <!-- Chat conversation START -->
                    <div class="chat-conversation-content overflow-auto custom-scrollbar">
                      <!-- Chat time -->
                      <div class="text-center small my-2">2023/7/1 14:50</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">Night signs creeping yielding green
                                Seasons.</div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">Creeping earth under was You're without
                              which image.</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">Won't that fish him whose won't
                                also. </div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">Moving living second beast Over fish
                              place beast.</div>
                            <div class="small my-2"></div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">Thing they're fruit together forth
                                day.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img class="avatar-img rounded-circle"
                            src="http://127.0.0.1:8888/image/ffce1c2f74701fd6c86b0832028edcd3.jpeg" alt="">
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Fly replenish third to said void life night yielding for heaven give blessed spirit.</div>
                              <div class="small my-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->

                </div>
              </div>
              <div class="card-footer">
                <div class="d-sm-flex align-items-end">
                  <textarea class="form-control mb-sm-0 mb-3" data-autoresize placeholder="发送消息"
                    rows="1"></textarea>
                  <!-- <button class="btn btn-sm btn-danger-soft ms-sm-2"><i class="fa-solid fa-face-smile fs-6"></i></button>
                  <button class="btn btn-sm btn-secondary-soft ms-2"><i class="fa-solid fa-paperclip fs-6"></i></button>
                  <button class="btn btn-sm btn-primary ms-2"><i class="fa-solid fa-paper-plane fs-6"></i></button> -->
                </div>
              </div>
            </div>
          </div>
        </div> <!-- Row END -->

      </div>

    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from "@/components/Index/Main"
export default {
  components: { Header, Main },
  name: "Assistant",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-conversation-content {
  padding-right: 10px;
}
.chat-conversation-content::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.chat-conversation-content::-webkit-scrollbar-thumb {
  background-color: skyblue;
}</style>
