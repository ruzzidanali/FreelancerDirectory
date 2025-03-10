using FluentValidation;
using FreelancerDirectory.Models;

namespace FreelancerDirectory.Validators
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(u => u.Username)
                .NotEmpty().WithMessage("Username is required")
                .MaximumLength(50).WithMessage("Username cannot exceed 50 characters");

            RuleFor(u => u.Email)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("Invalid email format");

            RuleFor(u => u.PhoneNumber)
                .NotEmpty().WithMessage("Phone number is required")
                .Matches(@"^\d{10}$").WithMessage("Phone number must be exactly 10 digits");

            RuleFor(u => u.Skillsets)
                .NotEmpty().WithMessage("Skillsets are required");

            RuleFor(u => u.Hobby)
                .NotEmpty().WithMessage("Hobby is required");
        }
    }
}
