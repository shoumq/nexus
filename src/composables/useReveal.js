import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useReveal() {
  const root = ref(null)
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -48px 0px'
      }
    )

    if (root.value) {
      observer.observe(root.value)
    }
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { root }
}
