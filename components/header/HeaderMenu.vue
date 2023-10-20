<template>
  <nav class="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 transition-navbar bg-white">
    <header class="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1280px] py-4">
      <div class="flex basis-0 flex-row flex-nowrap justify-start bg-white items-center no-underline text-medium whitespace-nowrap box-border">
        <a href="/" class="text-[#373c40] text-[24px]">
          Shoe.
        </a>
      </div>
      <div class="search-bar">
        <el-input
          placeholder="Type something"
          prefix-icon="el-icon-search"
        />
      </div>
      <ul class="h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex gap-8" data-justify="center">
        <el-button type="primary" class="btn-login" round>
          Login
        </el-button>
      </ul>
    </header>
  </nav>
</template>

<style>
.btn-login {
  background: #3e3e3e !important;
  border-color: #3e3e3e !important;
}
</style>
