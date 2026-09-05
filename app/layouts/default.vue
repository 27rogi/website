<template>
  <div
    bg="greendark-800"
    font="content 500"
    overflow="hidden"
  >
    <Html>
      <Body>
        <div
          flex="~ col"
          z="2"
          u-text="testudo-gold-50 size-xs lg:size-base"
          bg="greendark-700/20"
          min-h="screen"
          selection="bg-greenspring-600/50 text-white"
          relative
          class="[&_p]:leading-normal"
        >
          <AppNavBar />
          <div contents>
            <slot />
          </div>
          <div
            sticky
            top="100vh"
          >
            <AppFooter />
          </div>
        </div>
        <AppBackground />
      </Body>
    </Html>
  </div>
</template>
