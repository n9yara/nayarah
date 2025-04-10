get('https://api.lanyard.rest/v1/users/320398381677674502')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
          console.log("User Data:", data.data);
        } else {
          console.error("Failed to fetch user data");
        }
      })
      .catch(error => console.error("Error:", error));