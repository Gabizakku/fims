<script>
  import { invalidateAll } from "$app/navigation";
</script>

<button
  type="submit"
  class="border-2 border-fims-red bg-white text-fims-red px-9 py-2 hover:bg-fims-red hover:text-white disabled:border-fims-gray disabled:text-fims-gray rounded-full"
  onclick={async () => {
    await fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    invalidateAll();
  }}
>
  Log-out
</button>