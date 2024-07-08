<template>
  <div class="card bg-base-200 w-auto shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        <slot name="heading"></slot>
      </h2>
      <p>
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>
